const mails = [
    {
        header:{
            id:1,
            userName:"Looly",
            mailAddress:"looly93@breedy.com",
            lastSeen:new Date()
        },
        
        mails:
        [
            {
                id:2,
                userName:"Panda",
                message: {
                    content:"Hello Looly How are you Doing ?",
                    dateSent:new Date()
                },
                replyedMessage: {
                    from:"Looly",
                    content:"Looly Replyed Message"
                }
            },
            {
                id:2,
                userName:"Panda",
                message: {
                    content:"Panda is an animal that love eating Bamboo",
                    dateSent:new Date()
                }
            },
            {
                id:2,
                userName:"Panda",
                message: {
                    content:"By this Message this are three Messages Length Okay :) ",
                    dateSent:new Date()
                }
            }, 
            {
                id:2,
                userName:"Panda",
                message: {
                    content:"i Will Just Keep Sending Message from One Side to See what and who it's gonna be",
                    dateSent:new Date()
                }
            },
            {
                id:1,
                userName:"Looly",
                message: {
                    content:"Oh Panda i missed you so so much",
                    dateSent:new Date()
                },
                replyedMessage: {
                    from:"Panda",
                    content:"This is a replyed Message from Panda"
                }
            },
            {
                id:1,
                userName:"Looly",
                message: {
                    content:"Hi Panda this is another Message from Me !",
                    dateSent:new Date()
                }
            }
        ]
    },

    {
        header:{
            id:3,
            userName:"Ogeen Sama",
            mailAddress:"ogeenSama093@breedy.com",
            lastSeen:new Date()
        },
        mails:
        [
            {
                id:2,
                userName:"Panda",
                message: {
                    content:"When did the University Open?",
                    dateSent:new Date()
                }
            },
            {
                id:3,
                userName:"Ogeen Sama",
                message: {
                    content:"i don't care about, Plus this  is a long message you have to see how it should looks in the front-end this is a long test",
                    dateSent:new Date()
                },
                replyedMessage: {
                    from:"Panda",
                    content:"Replyed Message Content"
                }
            }
        ]
    }

    
]

module.exports = mails;