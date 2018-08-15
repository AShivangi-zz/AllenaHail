#Joint Controller
#by Allena Hail
#www.allenahail.com

import maya.cmds as mc
#stores selection
myList=[]
myList.append(mc.ls(sl=True)[0])
myList.append(mc.ls(sl=True)[1])

#creates empty group
cntrlGRP = mc.group(name='GRP', empty=1, world=1)

#recalls selection, adds new grp
cmds.select(myList[0], cntrlGRP)

#Creates and deletes parent constraint with offsets
prtCns = mc.parentConstraint()
mc.delete(prtCns)
#selects cntrl and its new grop, then parents
cmds.select(myList[1],cntrlGRP)
cmds.parent(r=True)

#selects Cntrl and bone and constrains
cmds.select(myList[1],myList[0])
cmds.parentConstraint(maintainOffset=True)