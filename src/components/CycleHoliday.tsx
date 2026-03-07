import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎃" | "🎄" | "🐝" | "💝" | "🎁";
    const [holiday, setHoliday] = useState<Holiday>("💝");
    const SORT_ALPHABET: Record<Holiday, Holiday> = {
        "🎁": "🎄",
        "🎄": "🎃",
        "🎃": "🐝",
        "🐝": "💝",
        "💝": "🎁",
    };
    const SORT_YEAR: Record<Holiday, Holiday> = {
        "💝": "🐝",
        "🐝": "🎃",
        "🎃": "🎄",
        "🎄": "🎁",
        "🎁": "💝",
    };
    function sortByAlphabet(): void {
        const newHoliday = SORT_ALPHABET[holiday];
        setHoliday(newHoliday);
    }
    function sortByYear(): void {
        const newHoliday = SORT_YEAR[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={sortByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={sortByYear}>Advance by Year</Button>
        </div>
    );
}
