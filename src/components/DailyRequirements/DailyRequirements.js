import './DailyRequirements.css';

function DailyRequirements() {
    return (
        <div className="daily-requirements">
            <h2>Daily Requirements</h2>
            <p>Let's breakdown your daily food requirements</p>
            <div className="daily-requirements-form">
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" name="age" />
                    </div>
                    <div>
                        <label htmlFor="weight">Weight</label>
                        <input type="number" id="weight" name="weight" />
                    </div>
            </div>
        </div>
    );
}

export default DailyRequirements;