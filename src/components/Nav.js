import React from 'react'

function Nav(props) {
   
    const handletop = ()=>{
        if(props.top == false){
            props.topfun(true)
            props.recommendedfun(false)
            props.latestfun(false) 

        }
        console.log("hi")
    }
    
    const handlerecommended = ()=>{
        if(props.recommended == false){
            props.recommendedfun(true)
            props.topfun(false)      
            props.latestfun(false) 
        }
        console.log("hi")
    }

    const handlelatest = ()=>{
            props.latestfun(true)
            props.recommendedfun(false)
            props.topfun(false)

    }
    return (
        <div className="flex w-full h-[10%] bg-blue-400 items-center justify-center " >
            <div className="flex items-center justify-evenly w-[800px]">
                <p className={props.top?"text-white font-sans font-bold text-2xl p-2 border-b-4 hover:cursor-pointer":"text-2xl text-white font-sans font-bold text-3xl hover:cursor-pointer border-b-4 border-transparent p-2"} onClick={handletop}>Top</p>
                <p className={props.recommended?"text-white font-sans font-bold text-2xl p-2 border-b-4 hover:cursor-pointer":"text-2xl text-white font-sans font-bold text-3xl hover:cursor-pointer border-b-4 border-transparent p-2"} onClick={handlerecommended}>Recommended</p>
                <p className={props.latest?"text-white font-sans font-bold text-2xl p-2 border-b-4 hover:cursor-pointer" :"text-2xl text-white font-sans font-bold text-3xl hover:cursor-pointer border-b-4 border-transparent  p-2"} onClick={handlelatest}>Latest</p>
            </div>
        </div>
    )
}

 export default Nav
