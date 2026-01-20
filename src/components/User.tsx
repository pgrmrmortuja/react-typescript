type userProps = {
    name: string;
    age: number ;
    isRegistered: boolean
}

const User = ({name , age, isRegistered} : userProps) => {
    return (
        <div>
            <h1>User Information</h1>

            <h2>{name}</h2>
            <p>{age} Years.</p>
            {
                isRegistered ? <>Registered</> : <>Not Registered</>
            }
        </div>
    );
};

export default User;