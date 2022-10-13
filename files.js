// to interact with file modules fs is needed
const fs= require('fs');

//reading files
fs.readFile('./docs/item.txt',((err,data)=>{
  // 2 args 1 is directory path , another is a funct that will execute only after the file is read 
  if (err){
    console.log(err,"error")
  }
console.log(data.toString(),"data")
 }
 ))
 
 


//writing files

fs.writeFile('./docs/item.txt','this stuff will be replaced by whts in the item file',(()=>{
  console.log("file was changed")
}))

// if the file doesnt already exist doing this will create a file and put the data in it
fs.writeFile('./docs/item1.txt','new file created this way by putting new file name here in 1arg',(()=>{
  console.log("file was changed")
}))

//directories(create & delete)

// create
if(!fs.existsSync('./newFile')){
  fs.mkdir('./newFile',((err)=>{
    if(err){
      console.log(err,'error')
    }
    console.log('Folder created')
  }))
  
}else{
  console.log("removing the newFile folder")
  fs.rmdir('./newFile',(err)=>{
 if (err){
  console.log(err,'error while deleting the folder')
 }
 console.log("folder deleted sucessfully")
  })
}

//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
  // deleting a file using unlink
fs.unlink('./docs/deleteme.txt',((err)=>{
if(err){
  console.log(err,'error while deleting the file')
}
console.log('file deleted sucessfully')
}))
}