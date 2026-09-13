function ProfileCard ({name,exp,prfImage}) {
    return(
        <>
            <div className="profile-card">
                <p>My Name is {name}.</p>
                <p>I have total {exp}.</p>
                <img src={prfImage} alt="" title="" width={150} height={150} />
            </div>
        </>
    )
    
}
export default ProfileCard;