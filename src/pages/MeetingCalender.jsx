import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import "../styles/MeetingCalender.css"
// import 'react-calendar/dist/Calendar.css';
const MeetingCalender = () => {
    const dates = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 AM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"]
    const [date, setDate] = useState(new Date());
    const [selected, setSelected] = useState(0);
    function fun() {
        var s = ""
        for (var i = 9; i <= 12; i++) {
            s = s + `"${i}` + ':00 AM",'
            s = s + `"${i}` + ':30 AM",'

        }
        console.log(s);
    }
    React.useEffect(() => {
        fun()
    }, [])
    return (
        <>
            <div className=''>
                <div className=''>

                </div>
            </div>
            <div className='w-full flex justify-center items-center mt-[2rem] mb-[3rem]'>

                <div className='flex justify-evenly cal-par-box'>

                    <div className='bg-[#494E7F] pb-[3rem] px-4 flex justify-center flex-col items-center'>
                        <div className='text-[35px] text-white justify-center align-middle pb-8  text-center font-semibold'>
                            <div className=''>
                                NMOLD
                            </div>
                            Request a Meeting with NMOLD
                        </div>
                        <div className='calendar-container'>
                            <Calendar onChange={setDate} value={date} />
                        </div>
                    </div>
                    <div className='h-full font-semibold px-[3rem] text-center'>
                        <div className='text-[2rem]'>
                            Meeting Duration
                        </div>
                        <div className='btn mt-4 py-2 cursor-pointer ' onClick={
                            ()=>{
                                // scroll down
                                document.querySelector('.form-schedule-main-box').scrollIntoView({ behavior: 'smooth' });
                            }
                        }>
                            Select Duration
                        </div>
                        <div className=' font-semibold mt-3 text-left'>
                            What time works best
                        </div>
                        <div className='text-left'>
                            Selected time: <span className='text-[var(--theme)] '>

                                {date.toDateString()}
                            </span>
                        </div>
                        <div className='text-[var(--theme)] mb-6 text-left'>
                            UTC +5:30 India Standard Time
                        </div>
                        <div className='flex flex-col gap-3 max-h-[30rem] overflow-scroll '>
                            {dates.map((item, index) => {
                                return (
                                    <div className={` cursor-pointer px-[6rem] py-[0.2rem] text-center text-[20px] border-[var(--theme)] border-[1px] ${selected === index ? 'bg-[var(--theme)] text-white' : ""}`} onClick={
                                        () => {
                                            setSelected(index)
                                        }
                                    }>
                                        {item}
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={``}>
                <div className="flex items-center justify-center min-h-screen mt-4 form-schedule-main-box">
                    <div className="bg- p-10 rounded-lg shadow-md w-full max-w-4xl border border-blue-900">
                        <h1 className="text-2xl font-bold mb-4 text-left">Your Information</h1>
                        <div className='mb-[1rem]'>
                            {/* date */}
                            <div className="flex">
                                <div className="text-lg font-semibold text-[vtar(--theme)]">{date.toDateString("DD-MM-YYYY")} &nbsp;</div>
                                <div className='text-lg font-semibold text-[tvar(--theme)]'>{dates[selected]}</div>
                                </div>
                        </div>
                        <form className="space-y-6 pb-[3rem] ">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">First Name</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter First Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-left">Last Name</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Last Name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">Phone No.</label>
                                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Phone No." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">E-Mail</label>
                                <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter E-mail ID" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left">Company Name</label>
                                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Company Name" />
                            </div>

                            <div className="flex justify-between">
                                <button type="button" className="px-10 py-2 bg-white text-gray-700 rounded-md border border-blue-600" onClick={()=>{
                                    document.querySelector('.cal-par-box').scrollIntoView({ behavior: 'smooth' });
                                }}>Back</button>
                                <button type="submit" className="px-10 py-2 bg-[var(--theme)] text-white rounded-md">Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MeetingCalender