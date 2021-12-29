import React, { useState } from 'react'
import Latest from './Latest'
import Nav from './Nav'
import Recommended from './Recommended'
import Top from './Top'
function Home() {
    const [top, settop] = useState(true)
    const [recommended, setrecommended] = useState(false)
    const [latest, setlatest] = useState(false)
    return (
        <div className="w-full h-full">
            <Nav top={top} topfun={settop} recommended={recommended} recommendedfun={setrecommended} latest={latest} latestfun={setlatest}/>
            <div className="flex w-full h-[90%] justify-center">
                <div className="flex flex-col w-[800px] h-full border-black p-4 items-center overflow-y-scroll">
                    {top?<Top/>:recommended?<Recommended/>:<Latest/>}
                </div>
            </div>


        </div>
    )
}

export default Home
