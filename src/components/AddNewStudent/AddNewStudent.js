import './AddNewStudent.css';
import { useEffect, useState } from 'react';
const initialState = {
    studentName: '',
    classCode: '',
    math: '',
    phy: '',
    chem: ''
};

const AddNewStudent = props => {
    const [student, setStudent] = useState(initialState);

    useEffect(() => {
        const editingItemDatas = props.studentList.find(student => student.id === props.editingItem);
        setStudent(editingItemDatas || initialState);
    }, [props.editingItem, props.studentList]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    };

    const onSubmitAdd = e => {
        e.preventDefault();
        props.handleAddStudent(student);
        setStudent(initialState);
    };

    const onSubmitEdit = e => {
        e.preventDefault();
        props.handleEditItem(student);
        setStudent(initialState);
    };

    const onCancelEdit = () => {
        setStudent(initialState);
        props.handleCancelEdit();
    };

    const onCloseForm = () => {
        props.handleToggleForm();
    };

    return (
        <div className="form-wrap">
            <div className="form-core">
                <h2 className='title-form'>{!props.editingItem ? 'THÊM MỚI' : 'CHỈNH SỬA'}</h2>
                <form onSubmit={!props.editingItem ? onSubmitAdd : onSubmitEdit}>
                    <h3>HỌC SINH</h3>
                    <div className="student-input">
                        <div className="form-item">
                            <label htmlFor="studentName">Họ & Tên</label>
                            <input
                                type="text"
                                id="studentName"
                                name="studentName"
                                value={student.studentName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="classCode">Lớp</label>
                            <input
                                type="text"
                                id="classCode"
                                name="classCode"
                                value={student.classCode}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <h3>ĐIỂM</h3>
                    <div className="score-input">
                        <div className="form-item">
                            <label htmlFor="math">Toán</label>
                            <input
                                type="number"
                                id="math"
                                name="math"
                                value={student.math}
                                onChange={handleInputChange}
                                min={0}
                                max={10}
                                required
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="phy">Lý</label>
                            <input
                                type="number"
                                id="phy"
                                name="phy"
                                value={student.phy}
                                onChange={handleInputChange}
                                min={0}
                                max={10}
                                required
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="chem">Hóa</label>
                            <input
                                type="number"
                                id="chem"
                                name="chem"
                                value={student.chem}
                                onChange={handleInputChange}
                                min={0}
                                max={10}
                                required
                            />
                        </div>
                    </div>
                    <div className="button-space">
                        <button type="submit">{!props.editingItem ? 'Thêm' : 'Sửa'}</button>
                        {props.editingItem && <button onClick={onCancelEdit}>Hủy</button>}
                    </div>
                </form>
                <button className="close-form" onClick={onCloseForm}>
                    <i className="fa-sharp fa-solid fa-xmark fa-xl"></i>
                </button>
            </div>
        </div>
    );
};

export default AddNewStudent;
