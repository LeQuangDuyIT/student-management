const classification = gpa => {
    if (gpa >= 8.5) {
        return 'Giỏi';
    } else if (gpa >= 6.5) {
        return 'Khá';
    } else if (gpa >= 5) {
        return 'Trung Bình';
    } else if (gpa >= 3.5) {
        return 'Yếu';
    } else return 'Kém';
};
export default classification;
