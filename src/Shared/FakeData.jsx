import { faker } from '@faker-js/faker';

function createRandomeCarList(){
    return {
        name : faker.vehicle.vehicle(),
        fuelType : faker.vehicle.fuel(),
        model : faker.vehicle.model(),
        type : faker.vehicle.type(),
        image: "https://spn-sta.spinny.com/blog/20230522183814/BMW-5-Series-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6",
        miles : 1000,
        gearType : "Automatic",
        price : faker.finance.amount({min : 100000, max : 2000000})
    }
}

const carList = faker.helpers.multiple(createRandomeCarList,{
    count : 7,
})

export default carList;