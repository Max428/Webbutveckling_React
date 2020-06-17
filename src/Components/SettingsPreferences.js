import React from 'react';
import {Link} from 'react-router-dom';

const SettingsPreferences = () => {
    
    return (

        <div className="department">

        <p>Mina prefererade industrier att investera inom:</p>

        <form id="preferences-for-settings">
        <tr>
        <td>
        <input type="checkbox" name="industry" />
        Bygg
        </td>
        <td>
        <input type="checkbox" name="industry" />
        Industri x
        </td>
        </tr>

        <tr>
        <td>
        <input type="checkbox" name="industry" />
        Industri x
        </td>
        <td>
        <input type="checkbox" name="industry" />
        Industri x
        </td>
        </tr>

        <tr>
        <td>
        <input type="checkbox" name="industry" />
        Industri x
        </td>
        <td>
        <input type="checkbox" name="industry" />
        Industri x
        </td>
        </tr>

        <tr>
        <td>
        <input type="checkbox" name="industry" />
        Industri x
        </td>
        <td>
        <input type="checkbox" name="industry" />
        Industri x
        </td>
        </tr>
       
        </form>

        <p>Tips! Ifall du väljer att integrera din bank så kan vi anpassa dina
        <br />
        investeringar utefter din ekonomi och preferenser.
        </p>

        <Link>Itegrera min bank</Link>
        <p>(detta kommer att skicka dig vidare etc...)</p>

        </div>
    );
}

export default SettingsPreferences;