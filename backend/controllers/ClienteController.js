
const LogIn = (req, res) => {
    res.json({msg: 'login'});
}

const SignUp = (req, res) => {
    res.json({msg: 'sign-up'})
}

const ForgotPassword = (req, res) => {
    res.json({msg: 'forgot-password'});
}

const Profile = (req, res) => {
    res.json({msg: 'profile'})
}

const JoinRoom = (req, res) => {
    res.json({msg: 'join-room'});
}

const getRoom = (req, res) => {
    res.json({msg: 'get room'});
}

const Room = (req, res) => {
    res.json({msg: 'room'});
}

export {
    LogIn,
    SignUp,
    ForgotPassword,
    Profile,
    JoinRoom,
    Room,
    getRoom
}
