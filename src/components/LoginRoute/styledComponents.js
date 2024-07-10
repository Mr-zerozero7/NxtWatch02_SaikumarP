import styles from 'styled-components'

export const LoginMainContainer = styles.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
height: 100vh;
background-color: #f4f4f4;
font-family: roboto;
`
export const LoginContent = styles.div`
background-color: #ffffff;
border-radius: 20px;
height: 400px;
width: 400px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 20px;
box-shadow: 4px 3px 15px 4px;
`
export const FormContainer = styles.form`
width: 95%;
height: 95%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding-left: 30px;
`

export const WebsiteLogo = styles.img`
width: 200px;
height: 45px;
align-self:center;
`
export const LabelAndInputContainer = styles.div``
export const LabelTag = styles.label`
display: block;
`
export const InputTag = styles.input`
padding: 10px;
width: 80%;
border-radius: 6px;
outline: none;
border: 1px solid black;
`

export const CheckboxAndNoteContainer = styles.div`
display: flex;
align-items: center;
`
export const Checkbox = styles.input`
width: 18px;
height: 18px;
margin-right: 15px;
`
export const CheckboxNote = styles.label``
export const LoginButton = styles.button`
padding: 12px;
width: 85%;
border-radius: 10px;
font-weight: 600;
border: none;
outline: none;
cursor: pointer;
background-color: #3b82f6;
color: #ffffff;
margin-bottom: 0px;
`
export const ErrorMsg = styles.p`
color:red;
margin-top: 0px
`
