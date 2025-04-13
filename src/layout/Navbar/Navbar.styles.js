import styled from 'styled-components'
import { colors } from '../../styles/theme';

export const NavbarWrapper = styled.div`
`;

export const TopInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px auto 20px auto;
`;

export const MenuItems = styled.div`
    display: flex;
    gap: 27px;

    & .link {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main}50;
    }
`;

export const ContactsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    & > a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main};
    }

    & > button {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: ${colors.main}50;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
`;

export const NavbarContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        width: 210px;
        height: 35px;
    }

    .action-bar {
        display: flex;
        align-items: center;
        gap: 30px;

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
        }
    }
`;