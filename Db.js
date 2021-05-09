class Db {

  url;
  data;
  async constructor(url){
  //  this.url = url;
    let res = await fetch(this.url)
    let data = await res.json()
    this.data = data
  }

 // getdata
async  connect (){


 }


 //inset

 // update

 // delete

}
