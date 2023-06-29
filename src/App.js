import { useEffect, useState } from 'react';
import './App.css';
import AddNewStudent from './components/AddNewStudent/AddNewStudent';
import Student from './components/Student/Student';
import StudentList from './components/StudentList/StudentList';
import { mockupDatas } from './utils/mockupDatas';
import averageScore from './utils/averageScore';

function App() {
    const [studentList, setStudentList] = useState(mockupDatas);
    const [editingItem, setEditingItem] = useState(null);
    const [openForm, setOpenForm] = useState(false);

    const handleToggleForm = () => {
        setOpenForm(prev => !prev);
        if (!openForm) {
            setEditingItem(null);
        }
    };

    useEffect(() => {
        if (openForm) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
    }, [openForm]);

    const handleAddStudent = student => {
        const newStudent = { ...student, id: new Date().getTime() };
        setStudentList([...studentList, newStudent]);
        handleToggleForm();
    };

    const handleDeleteItem = id => {
        const newStudentList = studentList.filter(student => student.id !== id);
        setStudentList(newStudentList);
    };

    const editItemById = id => {
        setEditingItem(id);
    };

    const handleEditItem = editedStudent => {
        const newStudentList = studentList.map(student => (student.id === editingItem ? editedStudent : student));
        setStudentList(newStudentList);
        setEditingItem(null);
        handleToggleForm();
    };

    const handleCancelEdit = () => {
        setEditingItem(null);
        handleToggleForm();
    };

    const handleSort = type => {
        const datas = [...studentList];
        const toSort = {
            default: () => toSort.nameAscending(),
            nameAscending: () => datas.sort((student, nextStudent) => student.studentName.localeCompare(nextStudent.studentName)),
            nameDecreasing: () => datas.sort((student, nextStudent) => nextStudent.studentName.localeCompare(student.studentName)),
            scoreAscending: () => datas.sort((student, nextStudent) => averageScore(student) - averageScore(nextStudent)),
            scoreDecreasing: () => datas.sort((student, nextStudent) => averageScore(nextStudent) - averageScore(student))
        };
        setStudentList(toSort[type]());
    };

    return (
        <div className="container">
            <h1 className="app-name">ỨNG DỤNG QUẢN LÝ HỌC SINH</h1>
            {openForm && (
                <AddNewStudent
                    studentList={studentList}
                    handleAddStudent={handleAddStudent}
                    editingItem={editingItem}
                    handleEditItem={handleEditItem}
                    handleCancelEdit={handleCancelEdit}
                    handleToggleForm={handleToggleForm}
                />
            )}
            <StudentList handleSort={handleSort} studentList={studentList} handleToggleForm={handleToggleForm}>
                {studentList.map((student, index) => (
                    <Student
                        student={student}
                        index={index}
                        key={student.id}
                        handleDeleteItem={handleDeleteItem}
                        editItemById={editItemById}
                        handleToggleForm={handleToggleForm}
                    />
                ))}
            </StudentList>
            <div className="fade-back" style={openForm ? { display: 'block' } : {}}></div>
        </div>
    );
}

export default App;
