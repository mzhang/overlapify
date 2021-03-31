import {
    Checkbox,
    Table,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core";

export default function BasicTextFields() {
    const sampleResponse = [
        {
            id: 1001,
            title: "song 1",
            artist: "robert bobberson",
            popularity: 2,
        },
        {
            id: 1002,
            title: "song2",
            artist: "jimothy, the jimmer",
            popularity: 1,
        },
        {
            id: 1003,
            title: "jack's best song",
            artist: "jack",
            popularity: 2000,
        },
        {
            id: 1004,
            title: "stillife #4321",
            artist: "robert bobberson",
            popularity: 2,
        },
    ];

    return (
        <Table style={{ width: "100vw" }}>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Artist</TableCell>
                    <TableCell>Popularity</TableCell>
                </TableRow>
                {sampleResponse.map((song) => (
                    <TableRow>
                        <TableCell>{song.title}</TableCell>
                        <TableCell>{song.artist}</TableCell>
                        <TableCell>{song.popularity}</TableCell>
                    </TableRow>
                ))}
            </TableHead>
        </Table>
    );
}
