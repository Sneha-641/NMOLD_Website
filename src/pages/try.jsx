import React from 'react'
import <AppForm> from "../components/AppForm"
import <DevForm> from "../components/DevForm"
import <Mobile> from "../components/Mobile"

const Try = () => {
    const [data,setdata] = React.useState("dev")
  return (
    <>
        <form>
            {/* Content here to change state */}
        </form>
        {data=='app'?<AppForm/>:<div></div>} 
        {data=='dev'?<DevForm/>:<div></div>} 
        {data=='mobile'?<Mobile/>:<div></div>} 
    </>
  )
}

export default Try