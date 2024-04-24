import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import './MemberPage.css';

const MemberPage = () => {
  const history = useNavigate();
  
  const [uid,setUid]=useState('')
  const [name,setName]=useState('')
  const [relation,setRelation]=useState('')
  const [age,setAge]=useState('')
  const [contact,setContact]=useState('')
  const [contact2,setContact2]=useState('')
  const [address,setAddress]=useState('')
  const [address2,setAddress2]=useState('')
  const [language,setLanguage]=useState('')

  const [members, setMembers] = useState([]);
  const qrRef = useRef({});

  const handleAddMemberClick = () => {
    const uniqueId = uuidv4();
    setMembers([...members, {
      id: uniqueId,
      name: '', 
      relation: '', 
      age: '', 
      contact: '', 
      contact2: '', 
      address: '', 
      address2: '', 
      language: '', 
      qrCode: 'http://localhost:3000/info/'+uniqueId,
      isEditing: true 
    }]);
  };

  // async function save(e){
  //   e.preventDefault();

  //   try{

  //     await axios.post("http://localhost:8000/member",{
  //       name,relation,age,contact,contact2,address,address2,language
  //     })
  //     .then(res=>{
  //       if(res.data=="exist"){
  //         alert("User Already Exists")
  //       }
  //       else if(res.data=="notexist"){
  //         alert("Member Added")
  //       }
  //     })
  //     .catch(e=>{
  //       alert("wrong details")
  //       console.log(e);
  //     })

  //   }
  //   catch(e){
  //     console.log(e);

  //   }
  // }

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedMembers = members.map((member, idx) => idx === index ? {...member, [name]: value} : member);
    setMembers(updatedMembers);
  };

  const handleSave = async (event, index) => {
    event.preventDefault();
    const memberToSave = members[index];
    try {
      const res = await axios.post("http://localhost:8000/member", memberToSave);
      alert(res.data === "exist" ? "User Already Exists" : "Member Added");
    } catch (e) {
      alert("An error occurred");
      console.error(e);
    }
    const updatedMembers = members.map((member, idx) => idx === index ? { ...member, isEditing: false } : member);
    setMembers(updatedMembers);
  };

  const handleEdit = (index) => {
    const updatedMembers = members.map((member, idx) => idx === index ? {...member, isEditing: true} : member);
    setMembers(updatedMembers);
  };

  const handleDelete = (index) => {
    const updatedMembers = members.filter((_, idx) => idx !== index);
    setMembers(updatedMembers);
  };

  return (
    <div className="member-page-container">
      <button onClick={handleAddMemberClick}>Add Member</button>
      <div className="member-list">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            {member.isEditing ? (
              <form onSubmit={(e) => handleSave(e, index)}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={member.name}
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="Relation"
                  name="relation"
                  value={member.relation}
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="Age"
                  name="age"
                  value={member.age}
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="Contact"
                  name="contact"
                  value={member.contact}
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="Contact2"
                  name="contact2"
                  value={member.contact2}
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={member.address}
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="Address2"
                  name="address2"
                  value={member.address2}
                  onChange={(e) => handleChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="Language"
                  name="language"
                  value={member.language}
                  onChange={(e) => handleChange(e, index)}
                /><br />
                <button type="submit">Save</button>
              </form>
            ) : (
              <div>
                <p>ID: {member.id}</p>
                <p>Name: {member.name}</p>
                <p>Relation: {member.relation}</p>
                <p>Age: {member.age}</p>
                <p>Contact: {member.contact}</p>
                <p>Contact2: {member.contact2}</p>
                <p>Address: {member.address}</p>
                <p>Address2: {member.address2}</p>
                <p>Language: {member.language}</p>
                <QRCodeCanvas value={member.qrCode} size={128} />
                <button type="button" onClick={() => handleEdit(index)}>Edit</button>
                <button type="button" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberPage;
