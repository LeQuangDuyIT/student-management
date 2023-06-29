const averageScore = student => {
    const { math, phy, chem } = student;
    return ((+math + +phy + +chem) / 3).toFixed(1);
};

export default averageScore;
