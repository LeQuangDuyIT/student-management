import './StudentList.css';

const StudentList = props => {
    const onChangeSortType = e => {
        props.handleSort(e.target.value);
    };

    const onOpenForm = () => {
        props.handleToggleForm();
    }

    return (
        <div className="student-list">
            <div className="top-table">
                <p>Tổng số: <span className='student-quantity'>{props.studentList.length}</span> học sinh</p>
                <div>
                <button onClick={onOpenForm}>Thêm học sinh</button>
                <select name="table-sort" id="table-sort" onChange={onChangeSortType}>
                    <option value="default">Sắp xếp</option>
                    <option value="nameAscending">Tên: A - Z</option>
                    <option value="nameDecreasing">Tên: Z - A</option>
                    <option value="scoreAscending">Điểm: Thấp - Cao</option>
                    <option value="scoreDecreasing">Điểm: Cao - Thấp</option>
                </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>TT</th>
                        <th>Họ & Tên</th>
                        <th>Lớp</th>
                        <th>Toán</th>
                        <th>Lý</th>
                        <th>Hóa</th>
                        <th>GPA</th>
                        <th>Loại</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{props.children}</tbody>
            </table>
        </div>
    );
};

export default StudentList;
