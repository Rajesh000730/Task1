import { Button } from '@mui/material'
import React from 'react'
import profile from './steve.jpeg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
function Article() {
    return (
        <div className="w-[95%] h-[420px] border-2 border-black mb-8 rounded-xl p-4 hover:cursor-pointer">
           <div className="flex justify-evenly">
            <div className="flex items-center p-2">
                <img src={profile} width="50" height="50" className="rounded-full mr-2"/>
                <div>
                <p className="font-sans">29/12/2021</p>
                <p className="font-sans">Wednesday</p>
                </div>
            </div>
            <div className="w-[70%] p-2 ">
                <h1 className="text-3xl font-bold font-sans">The Ultimate Website Redesign SEO Checklist</h1>
            </div>
           </div>

           <div className="w-[95%] h-[260px] p-4 overflow-y-hidden">
                <h1 className="text-md font-sans">
                This week I had a call with a small business owner who is launching a website redesign in WordPress. He asked me how can we best preserve his existing SEO and makes sure he doesn’t lose any search ranking in the transition.

Right away I replied that this was a fabulous question. We then chatted about common mistakes that occur and how we can prevent them from happening with this website redesign project.

Here is the scary part about this conversation: I rarely am asked about this until the website is redesigned and launched and the damage is done. It’s only then that I receive a website inquiry or Facebook post asking for assistance.

Sadly, that is way too late in the process to protect your SEO, your ranking in search, and your website traffic. By the time you notice a dip in ranking and traffic, the damage is done and it’s really hard to fully recover.
                </h1>
           </div>
           <div className="flex items-center justify-evenly w-[95%]">
                <Button><FavoriteBorderIcon/></Button>
                <Button><ShareIcon/></Button>
           </div>
        </div>
    )
}

export default Article
