import classes from "./profile-form.module.css";
import React from "react";
import {
  Dropdown,
  Tooltip,
  Input,
  Spacer,
  Button,
  Grid,
} from "@nextui-org/react";

function ProfileForm() {
  const [selected, setSelected] = React.useState(new Set(["Airport"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  return (
    <form className={classes.form}>
      <Input clearable bordered labelPlaceholder="Name and Surname" />
      <Spacer y={2.5} />
      <Input clearable bordered labelPlaceholder="Passport ID" />
      <Spacer y={2.5} />
      <Input clearable bordered labelPlaceholder="Travel Date: DD/MM/YY" />
      <Spacer y={2.5} />
      <Input clearable bordered labelPlaceholder="Luaggage Weight (KG)" />
      <Spacer y={2.5} />
      
      <Tooltip content={"choose the airport you need to go to :)"}>
        <Dropdown>
          <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            color="secondary"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <Dropdown.Item></Dropdown.Item>
            <Dropdown.Item key="Ist">Ist</Dropdown.Item>
            <Dropdown.Item key="Ank">Ank</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Tooltip>
      <Spacer y={2.5} />
      <Grid>
        <Button shadow color="gradient" auto>
          Submit
        </Button>
      </Grid>
    </form>
  );
}
export default ProfileForm;
