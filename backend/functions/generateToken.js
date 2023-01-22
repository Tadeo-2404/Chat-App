import randomstring from 'randomstring';

const generateToken =  () => {
    return randomstring.generate(20)
}

export default generateToken;