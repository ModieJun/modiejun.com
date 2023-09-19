import {Metadata} from "next";
import Link from "next/link";
import {EventRSVP} from "../../src/models/teamsnap/model";

export const metadata: Metadata = {
    title: 'Team Dashboard'
}

const SubDomain = ({params}:any) => {
    console.log(`params`)
    // const eventRsvp: EventRSVP = {attendanceStatus: "", id: "", memberId: "", responseDate: ""};
    // console.log(eventRsvp);

    return (
        <div className="min-h-screen max-w-screen-sm mx-auto flex flex-col flex-grow justify-center py-4 ">
            <div className="flex flex-row justify-between space-x-4 py-2 text-base">
                <div className="flex-grow">
                    <Link className="font-bold" href="/">Johnson Lin Subdomain</Link>
                </div>
                <p>dark</p>
                <Link href="/about">about</Link>
                <div className="flex items-center">
                    instagram
                </div>
            </div>

            <div className="my-4 flex-grow font-mono">
                <div>Domain set: {params.domain}</div>
                <table className="table-auto w-full">
                    <thead>
                    <tr>
                        <th>date</th>
                        <th>title</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800 text-sm text-zinc-800">
                    <tr>
                        <td>1961</td>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    </tr>
                    <tr>
                        <td>1972</td>

                        <td>Witchy Woman</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            {/*    footer*/}
            <footer className="flex flex-row justify-between space-x-4 py-2 text-sm">
                <div className="flex flex-grow flex-row">
                    <p className="text-gray-500">Johnson Lin (<a className="">@modiejun</a>)</p>
                </div>
                <a href="https://github.com/modiejun" target="_blank">stuff</a>
            </footer>
        </div>
    )
}

export default SubDomain;