// let reservation ={
//     roomNumber:10,
//     name:"John",
//     checkInDate:"30th April 2024"
// }
let reservation = [];

function isRoomAvailable(roomNumber){
    if(roomNumber >= 0 && roomNumber<
        reservation.length){
            if(reservation[roomNumber]===null){
                return true;
            }else {
                return false;
            }
        }
}
function makeReservation(roomNumber,name,checkInDate){
    if (roomNumber>= 0 && roomNumber<
        reservation.length){
            let reservation={
                roomNumber: roomNumber,
                name:name,
                checkInDate:checkInDate
            }
            reservation[roomNumber]= reservation;
            console.log("Reservation successful");
         } else{
            console.log("Room is already taken")
            }
        }
