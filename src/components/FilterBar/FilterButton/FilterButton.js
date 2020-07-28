import React from "react";
import Select from 'react-select';

class FilterButton extends React.Component {
    namesMap = {
        "diagonals": "Diagonal",
        "processors": "Processor",
        "rams": "RAM",
        "storageTypes": "Storage Type",
        "capacityStorage": "Disk Size",
        "monitorTypes": "Matrix",
        "oss": "OS",
        "videoCards": "Video Card",
        "videoCardTypes": "Video Card Type",
    };


    customStyles = {
        container: (provided, state) => ({
            ...provided,
            width: 100,
            padding: 20,
        })
    };


    handleChange = (selectedOption, name, onSelect) => {
        onSelect(name, selectedOption.value)
    };

    render() {
        const items = this.props.filter[0];
        const options = this.props.filter[1].map((i) => {
            return {"value": i, "label": i}
        });
        const onSelect = this.props.onSelect;

        const selectedOption = this.props.selectedOption ? { value: this.props.selectedOption, label: this.props.selectedOption} : null;
        return (
            <div style={{width: "200px", margin:"30px"}}><Select placeholder={this.namesMap[items]}
                    value={selectedOption}
                    onChange={(selectedOption) => this.handleChange(selectedOption, items, onSelect)}
                    options={options}
                    style={this.customStyles}

            /></div>
        );
    };
}

export default FilterButton;

