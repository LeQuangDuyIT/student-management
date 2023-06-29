import './Student.css';
import averageScore from '../../utils/averageScore';
import classification from '../../utils/classification';

const Student = props => {
    const { student, index } = props;
    const { id, studentName, classCode, math, phy, chem } = student;
    const gpa = averageScore(student);

    const onDeleteItem = () => {
        props.handleDeleteItem(id);
    };

    const onEditItem = () => {
        props.handleToggleForm();
        props.editItemById(id);
    };

    return (
        <tr className="student-row">
            <td>{index + 1}</td>
            <td>{studentName}</td>
            <td>{classCode}</td>
            <td>{math}</td>
            <td>{phy}</td>
            <td>{chem}</td>
            <td>{gpa}</td>
            <td>{classification(gpa)}</td>
            <td className='setting-space'>
                <button onClick={onEditItem}><i className="fa-solid fa-user-pen fa-sm"></i></button>
                <button onClick={onDeleteItem}><i className="fa-solid fa-user-minus fa-sm"></i></button>
            </td>
        </tr>
    );
};

export default Student;
