import jsonwebtoken from 'jsonwebtoken';

const generateJWT = (id) => {
    return jsonwebtoken.sign({id: id}, process.env.PRIVATE_WORD, {
        expiresIn: "30d"
    })
}

export default generateJWT;
