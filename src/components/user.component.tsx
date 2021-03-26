import React from 'react';
import './user.component.css'
export interface IProps {
    user: any;
}
const userElem = (props: IProps | any) => {
    const openProfile = (link) => { window.open(link, '_blank'); };
    return (
<div className="card">
  <div className="card-body">
    <div className="row m-0">
       <div className="col-4">
       <img className="card-img-top" src= {props.user.owner.avatar_url} alt="User logo" loading= "lazy"/>
       <button className="btn btn-danger mt-1" type="button" onClick = { () => openProfile(props?.user?.owner?.html_url)}>View Profile</button>
       </div>
       <div className="col-8">
             <div className="text-dark">
                 <div className="mr-2">
                 <a href={props.user.html_url} target="_blank">{props.user.name}</a>
                 </div>
                 <span className="badge badge-pill badge-success mr-2"><i className="fa fa-star" aria-hidden="true"></i> {props.user.stargazers_count}</span>
    <span className="badge badge-pill badge-primary"><i className="fa fa-code-fork" aria-hidden="true"></i> &nbsp; {props.user.forks_count}</span>
            </div>   
       </div>
    
    </div>  
  </div>
</div>
    );
};

export default userElem;