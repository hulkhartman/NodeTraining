// Convert this "callback" approach to "promise" and then "async/await".



//callback
/* getCustomer(1, (customer) => {
  console.log('Customer: ', customer);  
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });  
}); */

//Promise
/* getCustomer(1)
    .then((customer) => {
    console.log('Customer: ', customer);  
      getTopMovies()
      .then((movies) => {
        console.log('Top movies: ', movies);
        sendEmail(customer.email, movies).then(() => {
          console.log('Email sent...')
        });
      });  
  }); */

  async function getCustomerInfo(){
    try{
        let customer = await getCustomer(1);
        let movies = await getTopMovies();
        let email = await sendEmail();
        console.log('Customer: ', customer);
        console.log('Top movies: ', movies);
        console.log('Email sent...')
    } catch(error){
        console.log(error.message)
    }

  }
  getCustomerInfo();




function getCustomer(id) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({ 
                id: 1, 
                name: 'Hardik Raval',       
                email: 'hardik@example.com' 
            })
        }, 4000);
    });  
}

function getTopMovies() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });

}

function sendEmail(email, movies) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
        }, 4000)
    });
}