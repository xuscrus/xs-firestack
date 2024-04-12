import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { get } from "lodash";
import { useRecordContext } from "react-admin";

export function UserAvatarField(props: { source: string; sx?: any, label?: string }) {
  const { sx, source } = props;

  const record = useRecordContext(props);
  const value = get(record, source);
  if (!value) {
    return (
      <Avatar
        sx={{
          ...sx,
          bgcolor: "gray",
          textTransform: "uppercase"
        }}
      />
    );
  }
  const calculated = stringAvatar(value);
  return <Tooltip title={value}>
     <Avatar {...calculated} sx={{ ...calculated.sx, ...sx }} />
   </Tooltip>
}

function stringAvatar(name: string) {
  const separator = name.includes(".") ? "." : " "
  const nameParts = name.split(separator);
  const avatarName =  `${nameParts[0][0]}${
    nameParts[1] ? nameParts[1][0] : nameParts[0].slice(-1)
  }`.toUpperCase()
  return {
    alt: name,
    sx: {
      bgcolor: stringToHslColor(name, 100, 40),
      color: "white !important",
    },
    children: avatarName,
  };
}

function stringToHslColor(str: string, s: number, l: number) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 300;
  return `hsl(${h}, ${s}%, ${l}%)`
}
