import React, { useEffect, useState } from 'react'
import "../styles/Home.css"
import { IEmployee , PageEnum} from '../components/custom/Employee.type';
import {EmployeeList}  from '../components/custom/EmployeeList';
import AddEmployee from '../components/custom/AddEmployee';
import "../styles/Home.css"
import EditEmployee from '../components/custom/EditEmployee';
export const Home = () => {

const [employeeList, _setEmployeeList] = useState( [] as IEmployee[]);
const [shownPage, setShownPage] = useState(PageEnum.list)
const[dataToEdit, setDataToEdit]= useState({} as IEmployee)

useEffect(()=>{
 const listInString =  window.localStorage.getItem("EmployeeList")
 if (listInString){
  _setEmployeeList(JSON.parse(listInString))}
},[]);
 
const onAddEmployeeClickHnd = () => {
  setShownPage(PageEnum.add)
}

const showListPage=()=> {
  setShownPage(PageEnum.list)
}

const setEmployeeList =(list:IEmployee[])=>{
  _setEmployeeList(list)
  window.localStorage.setItem("EmployeList", JSON.stringify(list))
}

const addEmployee =(data: IEmployee)=>{
  _setEmployeeList([...employeeList, data])
}  

const deleteEmployee = (data: IEmployee)=>{
  const indexToDelete = employeeList.indexOf(data);
  const tempList = [...employeeList]

  tempList.splice(indexToDelete, 1);
  _setEmployeeList(tempList)
}

const editEmployeedata=(data: IEmployee)=>{
  setShownPage(PageEnum.edit)
  setDataToEdit(data)
}
const updateData = (data: IEmployee)=>{
  const filteredData = employeeList.filter(x=>x.id === data.id)[0]
  const indexOfRecord= employeeList.indexOf(filteredData);
  const tempData = [...employeeList]
  tempData[indexOfRecord]=data
  _setEmployeeList(tempData)
}

  return (
    <>
     <article className='article-header'>
        <header>
            <h1>Crud application</h1>
        </header>
    </article>

<section className="section-content">

  {shownPage === PageEnum.list &&(
  <>  <input type="button" value="Add Employee" onClick={onAddEmployeeClickHnd} className='add-employee-btn'/>

  
  <EmployeeList list={employeeList}  onDeleteClickHnd={deleteEmployee} onEdit={editEmployeedata}/>
  </>
  )}
  {shownPage === PageEnum.add && <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployee}/>}

{shownPage== PageEnum.edit&& <EditEmployee data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData}/>}

</section>


    </>
  )
}
