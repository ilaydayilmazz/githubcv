import testData from '../Data/cv.json';

export const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(testData);
        }, 2000);
    });
}
