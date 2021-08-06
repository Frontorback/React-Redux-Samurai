import React from 'react';
import face from '../imggg/facess.png'
import loading from '../imggg/loading.gif'
import ProfileStatus from './ProfileStatus';




const AddPosts = (props) =>{
    
    return(
        <div id ={props.id}>{props.name}</div>
    )
}

const Profile = (props) =>{
    if(!props.ProfileInformation){
        return <img src={loading} alt=": null"/>
    }
    let RefOfText = React.createRef();
    
    let pushPost = () => {
        props.addNewPost();
    
    }
    let updatePost = () => {
        let text = RefOfText.current.value;
        
        props.updateNewPost(text);
        }

    let AddOfDialogs = props.state.AddMessages.map(m => <AddPosts name={m.mes}  id= {m.id}/>)
    
    return (
        <div>
            <div>Profile</div>
            <img src={props.ProfileInformation.photos.large} alt="From-Server"/>
            <div className="fullName">My name: <span>{props.ProfileInformation.fullName}</span></div>
            <div className="thoughts">My thoughts: <span>{props.ProfileInformation.aboutMe}</span></div>
            <img className='imgg' src={face} alt='sad'/>
            <div>
                <ProfileStatus status={"Test Status"} />
            </div>
            <textarea onChange={updatePost} ref={RefOfText} value={props.state.NewText}></textarea>
            <button onClick={pushPost}>Check</button>
            {AddOfDialogs}
            
        </div>
    )
}
export default Profile