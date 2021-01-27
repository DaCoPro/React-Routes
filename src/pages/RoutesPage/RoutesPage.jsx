import * as usersService from '../../utilities/users-service';

export default function RoutesPage() {

async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
    }

    return (
    <>
        <h1>Routes</h1>
       
    </>
    );
}