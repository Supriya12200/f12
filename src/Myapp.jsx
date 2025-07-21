import React, { Component } from 'react';
import './Myapp.css'
class Myapp extends Component {
    render() {
        return (
            <div className='myinfo'>
                <img className='photo' src='/profile pic.png' alt='photo'/><br></br>
                <table>
                    <tr>
                        <td><label className='deot'>Name:</label></td>
            
                       <td><label>supriya</label><br></br></td> 
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><label className='deot'>program:</label></td>
                       <td><label1>B.tech...cse</label1><br></br></td> 
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><label className='deot'>Mobile.no:</label></td>
                       <td><label>563473678</label><br></br></td> 
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><label className='deot'>Email id:</label></td>
                       <td><label>namasupriyanama@gmail.com</label><br></br></td> 
                    </tr>
                    <tr>
                        <td> <label className='deot'>course: </label></td>
                            <td> <label> front end development frame works</label></td>
                            
                    </tr>
                </table>
                    
            
              
              
            </div>
        );
    }
}

export default Myapp;
