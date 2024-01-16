import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
<nav>
    <div className='logoblock'><img className='logoimage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROnxnbq6UMCCcvrfd0mRTdyjHmUiWQU0YbA&usqp=CAUdata:image/png;base64,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" alt="todo logo" /></div>
    
    <div className='menublock'>
        <ol className='menu'>
            <li>
               <Link className='linktag' to={"/signup"}>Signup</Link>
            </li>
            <li>
                 <Link className='linktag' to={"/"}>Login</Link>
            </li>
            <li>
                <Link className='linktag' to={"/fetch"}>ToDo Home</Link>
            </li>
            <li>
              <Link className='linktag' to={"/"}>Logout</Link>
            </li>

            
        </ol>
    </div>
</nav>
  )
}

export default Nav