var email={
    name: "gmail",
    url: "https://mail.google.com",
    actions: ["compose mail", "search", "read mail"],
    inbox:{
            
                primary:{
                    unread:[
                        {
                            sender:"Codewars",
                            subjectline: "Weekly Coding Challenges",
                            content:"<html></html>"
                        },
                        {
                            sender:"Jimmy Johns",
                            subjectline: "Your Jimmy Johns Online Order is Confirmed",
                            content:"<html></html>"

                        }],
                    read: [
                        {
                            sender:"Google",
                            subjectline: "Security Alert",
                            content:"<html></html>"
                        },
                        {
                            sender:"Team@ZipRecruiter",
                            subjectline: "Tyler, WOW - Your Job Application Was Viewed 3 Times!",
                            content:"<html></html>"

                        }]
                    },
                social:{
                    unread:[
                        {
                            sender:"Social Unread Sender1",
                            subjectline: "Social Unread Subject Line1",
                            content:"<html></html>"
                        },
                        {
                            sender:"Social Unread Sender2",
                            subjectline: "Social Unread Subject Line2",
                            content:"<html></html>"

                        }],
                    read: [
                        {
                            sender:"Social Read Sender1",
                            subjectline: "Social Read Subject Line1",
                            content:"<html></html>"
                        },
                        {
                            sender:"Social Read Sender2",
                            subjectline: "Social Read Subject Line2",
                            content:"<html></html>"

                        }]
                    },
                promotions:{
                    unread:[
                        {
                            sender:"Promotions Unread Sender1",
                            subjectline: "Promotions Unread Subject Line1",
                            content:"<html></html>"
                        },
                        {
                            sender:"Promotions Unread Sender2",
                            subjectline: "Promotions Unread Subject Line2",
                            content:"<html></html>"

                        }],
                    read: [
                        {
                            sender:"Promotions Read Sender1",
                            subjectline: "Promotions Read Subject Line1",
                            content:"<html></html>"
                        },
                        {
                            sender:"Promotions Read Sender2",
                            subjectline: "Promotions Read Subject Line2",
                            content:"<html></html>"

                        }]
                    },
                forums:{
                    unread:[
                        {
                            sender:"Forums Unread Sender1",
                            subjectline: "Forums Unread Subject Line1",
                            content:"<html></html>"
                        },
                        {
                            sender:"Forums Unread Sender2",
                            subjectline: "Forums Unread Subject Line2",
                            content:"<html></html>"

                        }],
                    read: [
                        {
                            sender:"Forums Read Sender1",
                            subjectline: "Forums Read Subject Line1",
                            content:"<html></html>"
                        },
                        {
                            sender:"Forums Read Sender2",
                            subjectline: "Forums Read Subject Line2",
                            content:"<html></html>"

                        }]
                    },
            }
        }
    


console.log(email.inbox.primary.unread[0]);
console.log(email.inbox);

var unread=email.inbox.primary.unread.length+email.inbox.social.unread.length+email.inbox.promotions.unread.length+email.inbox.forums.unread.length;
console.log(unread);
