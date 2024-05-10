// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time

async function acceptMessageAfterDelay(message,delayTime){
    await new Promise (resolve => 
        setTimeout(resolve,delayTime));
        console.log(message);
}
acceptMessageAfterDelay("Time for Meds!!",5000)

// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data
//  when given a user ID. Write an asynchronous function that fetches and logs the data for each user 
// ID one by one, in sequence.
const userId = [101,201,301,401,501];

async function getUserData(id){
    const userData= {id}
   return userData

}

async function findUserData(userId){

   for (let id of userId){
       const userData = await getUserData(id);
       console.log (userData);
   }

};

findUserData(userId);

// You have an asynchronous function performTask() that returns a Promise. The Promise resolves
// if the task is successful and rejects if there's an error. Write a function that calls performTask()
// and logs a custom success message if the task is successful, and a custom error message if there's an error.

const successfulTask=false

 async function performTask() {
    return new Promise((resolve, reject) => {
            if (successfulTask) {
                resolve("Mission Accomplished!");
            } else {
                reject("Mission Failed");
            }
        }
    )
};
async function manageTask() {
    try {
        const finalResult = await performTask();
        console.log("Success:", finalResult);
    } catch (error) {
        console.error("Error:", error);
    }
}
manageTask()

// Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.
const randomGeneratedNumber= Math.random();
function unstableTask(taskName, failureProbability){
    return new Promise((resolve, reject)=>{
        if(randomGeneratedNumber> failureProbability){
            resolve(`${taskName} succeeded`);
        }
        else {
            reject (`${taskName} failed`);
        }

    });
}

async function executeWithRetry(taskName, retries, failureProbability){
    let retry = 0;
    while(retry< retries){
        retry++;
        try{
            const result= await unstableTask(taskName, failureProbability);
            console.log(`Success:${result}`);
            return;
        }
        catch (error){
            console.log(`Fail ${retry}: ${error}`);
            if(retry>= retries){
                console.log(`Task "${taskName}" failed after ${retries} attempts`);
            }
        }
    }
}

executeWithRetry("Task retry",3,0.9)










