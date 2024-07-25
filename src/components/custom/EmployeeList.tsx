import '../../styles/EmployeeList.css'


import { IEmployee } from './Employee.type'

type Props = {
    list: IEmployee[]
    onDeleteClickHnd:(data: IEmployee)=>void
    onEdit: (data: IEmployee)=>void

}
 

export const EmployeeList = (props: Props) => { 
const {list, onDeleteClickHnd, onEdit} = props




 return (

    <>
   
    <div>

    <article>
      <h3>Employee List</h3>
    </article>
    <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
  {list.map((employee) =>{
    console.log(employee)
    return (
    <tr key = {employee.id}>
          <td>{`${employee.firstName} ${employee.lastName}`}</td>
    <td>{employee.email}</td>
    <td>
        <div>
            <input type="button" value="View"/>
            <input type="button" value="Edit" onClick={()=> onEdit(employee)}/>
            <input type="button" value="Delete" onClick={()=> onDeleteClickHnd(employee)}/>

        </div>
    </td>
  </tr>
 );
  })}
  

</table>


</div>

    </>
    )
}
