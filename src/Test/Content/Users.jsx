// import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { getAxiosFollow, getAxiosUnFollow } from '../Axios/Axios-API';
import facess from '../imggg/facess.png'
// import { FollowThunk, UnFollowThunk } from '../Redux/UserReducer ';


    let Users = (props) =>{
        // debugger;
        // let pages = Math.ceil(props.UsersAllPages / props.UsersCount);
                let masPages = [];
                for(let i =1; i <= 10 ; i++){
                    masPages.push(i);
                }
                
                
                return <div>
                    <div>
                        {masPages.map(p => {
                            return <span className={props.UsersCurrentPage === p && "page-num"}
                             onClick={() =>{props.onPageChanged(p);
                             }}>{p}</span>
                             })}
                    </div>
                    {
                    props.UsersPage.map(u => <div className="user-post" key ={u.id}>
                        <div className="Photo-button">
                           <div>
                               <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small === null ? facess: null } alt="microsoft" className="Photo-Users"/>
                                </NavLink>
                           </div>
                            <div>
                                {u.following ? <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                                    props.UnFollowThunk(u.id);

                                    
                                    
                                    // props.DisableFollowingBtn(true, u.id)
                                    // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials:true, headers: {"API-KEY": "0234f5d8-5878-4472-a063-c0983fb1d3c1"}}  )
                                    // getAxiosUnFollow(u.id)
                                    // .then(data =>{
                                    //     if(data.resultCode ===0){
                                    //         props.unfollowFnc(u.id)
                                    //     }
                                    //     props.DisableFollowingBtn(false, u.id)
                                    // })
                                    }
                                    }>unfollow</button> 
                                :<button disabled={props.isFollowing.some(id => id === u.id)} onClick={ () => {
                                    props.FollowThunk(u.id);

                                    // props.DisableFollowingBtn(true, u.id)
                                    // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials:true,  headers: {"API-KEY": "0234f5d8-5878-4472-a063-c0983fb1d3c1"}})
                                    // getAxiosFollow(u.id).then(data =>{
                                    //     if(data.resultCode === 0){
                                    //         props.followFnc(u.id)
                                    //     }
                                    //     props.DisableFollowingBtn(false, u.id)
                                    // });
                                    }}>follow</button>}
                           </div>
                            
                        </div>
                        <div className="info-area">
                            <span>
                                <div>{u.name}</div>
                                <div></div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </div>
                    </div>)   
                   }</div>
    }
            
            
        
export default Users