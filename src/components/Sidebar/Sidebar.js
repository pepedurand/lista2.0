import { Divider } from "@chakra-ui/react";
import { TaskLists } from "../TaskLists/TaskLists";
import { UserInfo } from "../UserInfo/UserInfo";
import { SideBarDiv } from "./styled";

export const Sidebar = () => {
  return (
    <SideBarDiv>
      <UserInfo />
      <Divider />
      <TaskLists />
      <Divider />
    </SideBarDiv>
  );
};
