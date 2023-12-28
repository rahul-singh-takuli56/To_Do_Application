import React, { useState } from 'react'

const Navbar = () => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    const [mainTask, setMainTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();  /* prevent to reload the page */
        setMainTask([...mainTask, { title, desc }]); /* so that we can add new data and  our previous data do not get lost*/
        setTitle("");     /* to reset the value  */
        setDesc("");
    };

    const deleteHandler = (ind) => {
        let copyTask = [...mainTask]; /*copy all Task  */
        copyTask.splice(ind, 1);
        setMainTask(copyTask);
    }

    let renderTaks = <h2>NO Task Available</h2>
    if (mainTask.length > 0) {
        renderTaks = mainTask.map((task, ind) => {
            return (
                <li key={ind} className='flex items-center justify-between mb-8'>
                    <div className='flex justify-between w-2/3'>
                        <h5 className='text-2xl font-bold mb-5'>{task.title}</h5>
                        <h6 className='text-lg font-medium '>{task.desc}</h6>
                    </div>
                    <button onClick={() => {
                        deleteHandler(ind)
                    }} className='bg-blue-900 text-white px-4 py-2 rounded font-bold hover:bg-orange-900'>Delete</button>
                </li>
            )
        })
    }

    return (
        <>
            <h1 className='bg-black p-5 text-xxl text-white font-bold text-center hover:bg-orange-900'> MY TODO LIST</h1>
            <button className="flex justify-end py-2 my-2 ml-auto px-2 bg-black text-white font-bold hover:bg-orange-900 active:bg-violet-600 rounded-sm">Log In</button>

            <form onSubmit={submitHandler}>
                <input type="text" className='text-xxl border-zinc-800 border-2 m-5 px-4 py-2'
                    placeholder="Enter Title here"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <input type="text"
                    className='text-xxl border-zinc-800 border-2 m-5 px-4 py-2'
                    placeholder="Enter Description here"
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value)
                    }}
                />

                <button
                    className='bg-black px-4 py-2 text-xl font-bold rounded m-5  text-white hover:bg-orange-900'>
                    Add Task
                </button>
            </form>
            <hr />
            <div className='p-8 bg-slate-200'>
                <ul>
                    {renderTaks}
                </ul>
            </div>

        </>
    )
}

export default Navbar
