import { Table } from "react-bootstrap"
import { FaCheck } from "react-icons/fa6"


export default function TablePlans() {

    const tableData = [
        { label: 'Barev', free: true, pro: true, enterprise: true },
        { label: 'Private', free: false, pro: true, enterprise: true },
        { label: 'Permissions', free: true, pro: true, enterprise: true },
        { label: 'Sharing', free: false, pro: true, enterprise: true },
        { label: 'Unlimited members	', free: false, pro: true, enterprise: true },
        { label: 'Extra Security', free: false, pro: false, enterprise: true },
    ]

    const tableParts = tableData.map((item) => {
        return (
            <tr>
                <th>{item.label}</th>
                <td>{item.free ? <FaCheck /> : ""}</td>
                <td>{item.pro ? <FaCheck /> : ""}</td>
                <td>{item.enterprise ? <FaCheck /> : ""}</td>
            </tr>
        )
    })



    return (
        <div>
            <h2 className="display- text-center mt-5" style={{ color: "white" }}> Compare Plans</h2>
            <Table
                responsive
                className="mx-auto mt-5"
                variant="dark"
                style={{ width: "1000px"}}
                
            >
                <thead>
                    <tr>
                        <th style={{ width: "40%" }}> </th>
                        <th style={{ width: "20%" }}> Free</th>
                        <th style={{ width: "20%" }}> Pro</th>
                        <th style={{ width: "20%" }}> Enterprize</th>
                    </tr>
                </thead>
                <tbody>
                    {tableParts}
                </tbody>
            </Table>
        </div>
    )
}