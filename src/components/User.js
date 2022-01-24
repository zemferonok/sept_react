const User = ({info:{id, name, email}}) => {

    return (
        <div>
            {id} ) {name} - {email}
        </div>
    );
};

export default User;