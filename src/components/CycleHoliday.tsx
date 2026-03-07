import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "Halloween"
        | "Christmas"
        | "Rosh Hashanah"
        | "Valentine's Day"
        | "Christmas Eve";
    const [holiday, setHoliday] = useState<Holiday>("Halloween");
    const SORT_ALPHABET: Record<Holiday, Holiday> = {
        Christmas: "Christmas Eve",
        "Christmas Eve": "Halloween",
        Halloween: "Rosh Hashanah",
        "Rosh Hashana": "Valentine's Day",
        "Valentine's Day": "Christmas",
    };
    const SORT_TIME: Record<Holiday, Holiday> = {
        "Valentine's Day": "Rosh Hashanah",
        "Rosh Hashana": "Halloween",
        Halloween: "Christmas Eve",
        "Christmas Eve": "Christmas",
        Christmas: "Valentine's Day",
    };
    return (
        <div>
            <Button>Cycle by Alphabetical Order</Button>
            <Button>Cycle by Time in Year</Button>
        </div>
    );
}
