import randomstring from 'randomstring';

const generateID = () => {
    return randomstring.generate(10);
}

export default generateID;