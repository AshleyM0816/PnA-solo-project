import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const Edit = (props) => {
    const { id } = useParams();
    const [name, setName] = useState(" ");
    const [move_1, setMove_1] = useState(" ");
    const [move_2, setMove_2] = useState(" ");
    const [move_3, setMove_3] = useState(" ");
    const [move_4, setMove_4] = useState(" ");
    const [held_item, setHeld_Item] = useState(" ");
    const [team_name, setTeam_Name] = useState(" ");
    const [completion_date, setCompletion_Date] = useState(" ");
    const [game, setGame] = useState(" ");
    const navigate = useNavigate();

    useEffect(() => {
        
        axios.get(`http://localhost:8000/api/pokemon/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setMove_1(res.data.move_1);
                setMove_2(res.data.move_2);
                setMove_3(res.data.move_3);
                setMove_4(res.data.move_4);
                setHeld_Item(res.data.held_item);
                setTeam_Name(res.data.team_name);
                setCompletion_Date(res.data.completion_date);
                setGame(res.data.game);
            })
            .catch((err) => {
                console.log(err);
            });
    // eslint-disable-next-line
    },[]);
    

    function editHandler(e) {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pokemon/${id}`,
            {
                name,
                move_1,
                move_2,
                move_3,
                move_4,
                held_item,
                team_name,
                completion_date,
                game
            }
        )
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div style={{textAlign: "left", marginLeft:"5%"}}>
            <h1>Edit Pokemon/Team</h1>
            <form onSubmit={editHandler}>

                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Name</label>
                    <input style={{padding: "8px"}} value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                </div>
                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Move 1:</label>
                    <input style={{padding: "8px"}} value={move_1} onChange={(e)=>setMove_1(e.target.value)} type="text" />
                </div>
                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Move 2:</label>
                    <input style={{padding: "8px"}} value={move_2} onChange={(e)=>setMove_2(e.target.value)} type="text" />
                </div>
                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Move 3:</label>
                    <input style={{padding: "8px"}} value={move_3} onChange={(e)=>setMove_3(e.target.value)} type="text" />
                </div>
                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Move 4:</label>
                    <input style={{padding: "8px"}} value={move_4} onChange={(e)=>setMove_4(e.target.value)} type="text" />
                </div>
                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Held Item:</label>
                    <input style={{padding: "8px"}} value={held_item} onChange={(e)=>setHeld_Item(e.target.value)} type="text" />
                </div>

                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Team Name:</label>
                    <input style={{padding: "8px"}} value={team_name} onChange={(e)=>setTeam_Name(e.target.value)} type="text" />
                </div>
                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Run Completion Date:</label>
                    <input style={{padding: "8px"}} value={completion_date} onChange={(e)=>setCompletion_Date(e.target.value)} type="text" />
                </div>
                <div style={{margin: "10px 0px"}}>
                    <label style={{width: "40px", display: "inline-block", marginRight: "30px"}}>Game Run was Completed in:</label>
                    <input style={{padding: "8px"}} value={game} onChange={(e)=>setGame(e.target.value)} type="text" />
                </div>


                <button style={{padding:"13px", margin:"20px", backgroundColor:"whitesmoke"}}>Submit Edit</button>

            </form>
        </div>
    );
};

export default Edit;